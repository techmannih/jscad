import { JsCadView } from "jscad-fiber"
import { VSSOP } from "../lib/VSSOP"
import { ExtrudedPads } from "../lib/ExtrudedPads"

export default () => {
  return (
    <JsCadView zAxisUp showGrid>
      <VSSOP />
      <ExtrudedPads footprint="vssop" />
    </JsCadView>
  )
}
