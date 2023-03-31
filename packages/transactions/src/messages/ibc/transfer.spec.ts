import { createIBCMsgTransfer as protoIBCMsgTransfer } from '@evmos/proto'
import {
  generateTypes,
  createIBCMsgTransfer,
  CREATE_IBC_MSG_TRANSFER_TYPES,
} from '@evmos/eip712'
import { IBCMsgTransferParams, createTxIBCMsgTransfer } from './transfer'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context, denom } = TestUtils

const sender = context.sender.accountAddress
const sourcePort = 'transfer'
const sourceChannel = 'channel-0'
const amount = TestUtils.amount1
const receiver = TestUtils.addr2
const revisionNumber = 42
const revisionHeight = 84
const timeoutTimestamp = '10000'

const params: IBCMsgTransferParams = {
  sourcePort,
  sourceChannel,
  amount,
  denom,
  receiver,
  revisionNumber,
  revisionHeight,
  timeoutTimestamp,
}

const validatePayload = (params: IBCMsgTransferParams) => {
  const types = generateTypes(CREATE_IBC_MSG_TRANSFER_TYPES(params.memo))
  const message = createIBCMsgTransfer(
    params.receiver,
    sender,
    params.sourceChannel,
    params.sourcePort,
    params.revisionHeight,
    params.revisionNumber,
    params.timeoutTimestamp,
    params.amount,
    params.denom,
    params.memo,
  )
  const typedData = {
    types,
    message,
  }

  const messageCosmos = protoIBCMsgTransfer(
    params.sourcePort,
    params.sourceChannel,
    params.amount,
    params.denom,
    sender,
    params.receiver,
    params.revisionNumber,
    params.revisionHeight,
    params.timeoutTimestamp,
    params.memo,
  )

  const payload = createTxIBCMsgTransfer(context, params)
  const expectedPayload = createTransactionPayload(
    context,
    typedData,
    messageCosmos,
  )
  expect(payload).toStrictEqual(expectedPayload)
}

describe('test tx payload', () => {
  it('produces tx payloads as expected without memo', () => {
    validatePayload(params)
  })

  it('produces tx payloads as expected with empty memo', () => {
    const paramsWithEmptyMemo = { ...params, memo: '' }
    validatePayload(paramsWithEmptyMemo)
  })

  it('produces tx payloads as expected with memo', () => {
    const paramsWithMemo = { ...params, memo: 'ibc memo' }
    validatePayload(paramsWithMemo)
  })
})
