import { series, parallel } from 'gulp'
import { publish, copyReadme } from './index'

export default series(
  async () => publish(),
)

