import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `微信公众号：书虫创客
- 网站以进行更改，网站余额购买或者有其他问题添加书虫微信：SCFuYe001
- https://www.fakabang.com/links/3E277A6E
- ↑↑↑，上面链接可以直接购买ChatGPT个人独享账号，自动发货，也可找书虫购买，免去手续费，手续费由平台收取
- 现在国内镜像版版本，每分钟只能回答三次，想购买独立key或者ChatGPT官方账号也可以联系书虫微信：SCFuYe001
- [[Shift]] + [[Enter]] 换行。开头输入 [[空格]] 跳出更多 预设。[[↑]] 可编辑最近一次提问。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
