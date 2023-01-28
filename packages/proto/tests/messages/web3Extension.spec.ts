import { createTxRaw } from '../../src/messages/txRaw'

describe('txRaw tests', () => {
  it('create tx raw', async () => {
    const body = new Uint8Array([
      10, 136, 1, 10, 28, 47, 99, 111, 115, 109, 111, 115, 46, 98, 97, 110, 107,
      46, 118, 49, 98, 101, 116, 97, 49, 46, 77, 115, 103, 83, 101, 110, 100,
      18, 104, 10, 43, 101, 116, 104, 109, 49, 116, 102, 101, 103, 102, 53, 48,
      110, 53, 120, 108, 48, 104, 100, 53, 99, 120, 102, 122, 106, 99, 97, 51,
      121, 108, 115, 102, 112, 103, 48, 102, 110, 101, 100, 53, 103, 113, 109,
      18, 43, 101, 116, 104, 109, 49, 116, 102, 101, 103, 102, 53, 48, 110, 53,
      120, 108, 48, 104, 100, 53, 99, 120, 102, 122, 106, 99, 97, 51, 121, 108,
      115, 102, 112, 103, 48, 102, 110, 101, 100, 53, 103, 113, 109, 26, 12, 10,
      7, 97, 112, 104, 111, 116, 111, 110, 18, 1, 49, 250, 63, 161, 1, 10, 42,
      47, 101, 116, 104, 101, 114, 109, 105, 110, 116, 46, 116, 121, 112, 101,
      115, 46, 118, 49, 46, 69, 120, 116, 101, 110, 115, 105, 111, 110, 79, 112,
      116, 105, 111, 110, 115, 87, 101, 98, 51, 84, 120, 18, 115, 8, 168, 70,
      18, 43, 101, 116, 104, 109, 49, 116, 102, 101, 103, 102, 53, 48, 110, 53,
      120, 108, 48, 104, 100, 53, 99, 120, 102, 122, 106, 99, 97, 51, 121, 108,
      115, 102, 112, 103, 48, 102, 110, 101, 100, 53, 103, 113, 109, 26, 65, 95,
      219, 33, 190, 98, 109, 191, 101, 139, 33, 77, 174, 170, 109, 101, 137,
      240, 235, 232, 240, 220, 190, 187, 173, 250, 236, 242, 67, 74, 82, 132,
      204, 12, 178, 164, 122, 106, 195, 154, 165, 178, 255, 188, 143, 234, 77,
      242, 13, 51, 173, 224, 246, 187, 119, 101, 170, 32, 217, 208, 71, 26, 172,
      211, 142, 27,
    ])
    const auth = new Uint8Array([
      10, 89, 10, 79, 10, 40, 47, 101, 116, 104, 101, 114, 109, 105, 110, 116,
      46, 99, 114, 121, 112, 116, 111, 46, 118, 49, 46, 101, 116, 104, 115, 101,
      99, 112, 50, 53, 54, 107, 49, 46, 80, 117, 98, 75, 101, 121, 18, 35, 10,
      33, 2, 4, 240, 251, 139, 244, 117, 162, 43, 198, 195, 82, 91, 129, 92, 67,
      226, 40, 138, 120, 15, 177, 225, 112, 28, 237, 67, 158, 203, 50, 160, 234,
      153, 18, 4, 10, 2, 8, 127, 24, 1, 18, 19, 10, 13, 10, 7, 97, 112, 104,
      111, 116, 111, 110, 18, 2, 50, 48, 16, 192, 154, 12,
    ])
    const sig = [new Uint8Array()]
    const txRaw = new Uint8Array([
      10, 176, 2, 10, 136, 1, 10, 28, 47, 99, 111, 115, 109, 111, 115, 46, 98,
      97, 110, 107, 46, 118, 49, 98, 101, 116, 97, 49, 46, 77, 115, 103, 83,
      101, 110, 100, 18, 104, 10, 43, 101, 116, 104, 109, 49, 116, 102, 101,
      103, 102, 53, 48, 110, 53, 120, 108, 48, 104, 100, 53, 99, 120, 102, 122,
      106, 99, 97, 51, 121, 108, 115, 102, 112, 103, 48, 102, 110, 101, 100, 53,
      103, 113, 109, 18, 43, 101, 116, 104, 109, 49, 116, 102, 101, 103, 102,
      53, 48, 110, 53, 120, 108, 48, 104, 100, 53, 99, 120, 102, 122, 106, 99,
      97, 51, 121, 108, 115, 102, 112, 103, 48, 102, 110, 101, 100, 53, 103,
      113, 109, 26, 12, 10, 7, 97, 112, 104, 111, 116, 111, 110, 18, 1, 49, 250,
      63, 161, 1, 10, 42, 47, 101, 116, 104, 101, 114, 109, 105, 110, 116, 46,
      116, 121, 112, 101, 115, 46, 118, 49, 46, 69, 120, 116, 101, 110, 115,
      105, 111, 110, 79, 112, 116, 105, 111, 110, 115, 87, 101, 98, 51, 84, 120,
      18, 115, 8, 168, 70, 18, 43, 101, 116, 104, 109, 49, 116, 102, 101, 103,
      102, 53, 48, 110, 53, 120, 108, 48, 104, 100, 53, 99, 120, 102, 122, 106,
      99, 97, 51, 121, 108, 115, 102, 112, 103, 48, 102, 110, 101, 100, 53, 103,
      113, 109, 26, 65, 95, 219, 33, 190, 98, 109, 191, 101, 139, 33, 77, 174,
      170, 109, 101, 137, 240, 235, 232, 240, 220, 190, 187, 173, 250, 236, 242,
      67, 74, 82, 132, 204, 12, 178, 164, 122, 106, 195, 154, 165, 178, 255,
      188, 143, 234, 77, 242, 13, 51, 173, 224, 246, 187, 119, 101, 170, 32,
      217, 208, 71, 26, 172, 211, 142, 27, 18, 112, 10, 89, 10, 79, 10, 40, 47,
      101, 116, 104, 101, 114, 109, 105, 110, 116, 46, 99, 114, 121, 112, 116,
      111, 46, 118, 49, 46, 101, 116, 104, 115, 101, 99, 112, 50, 53, 54, 107,
      49, 46, 80, 117, 98, 75, 101, 121, 18, 35, 10, 33, 2, 4, 240, 251, 139,
      244, 117, 162, 43, 198, 195, 82, 91, 129, 92, 67, 226, 40, 138, 120, 15,
      177, 225, 112, 28, 237, 67, 158, 203, 50, 160, 234, 153, 18, 4, 10, 2, 8,
      127, 24, 1, 18, 19, 10, 13, 10, 7, 97, 112, 104, 111, 116, 111, 110, 18,
      2, 50, 48, 16, 192, 154, 12, 26, 0,
    ])
    const message = createTxRaw(body, auth, sig)
    expect(message.message.toBinary()).toStrictEqual(txRaw)
    expect(message.path).toBe('cosmos.tx.v1beta1.TxRaw')
  })
})
