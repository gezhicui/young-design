import { ExtractPropTypes } from 'vue'

export const infoProps = {
  userInfo: String,
  describe: String,
  linkUrl: String
}

export type InfoProps = ExtractPropTypes<typeof infoProps>
