import { ChipBody } from "./ChipBody"
import { SmdChipLead } from "./SmdChipLead"

export const VSSOP = ({
  pinCount = 8,
  pitch = 0.5,
  leadWidth = 0.22,
  leadLength = 0.5,
  bodyWidth = 2.3,
}: {
  pinCount?: number
  pitch?: number
  leadWidth?: number
  leadLength?: number
  bodyWidth?: number
}) => {
  const sidePinCount = Math.ceil(pinCount / 2)
  const fullLength = (pitch * pinCount) / 2 + leadWidth / 2
  const pinOffsetToCenter = ((sidePinCount - 1) * pitch) / 2
  const leadThickness = 0.2

  return (
    <>
      {Array.from({ length: sidePinCount }).map((_, i) => (
        <SmdChipLead
          key={i}
          position={{
            x: -bodyWidth / 2 - leadLength,
            y: i * pitch - pinOffsetToCenter,
            z: leadThickness / 2,
          }}
          width={leadWidth}
          thickness={leadThickness}
          padContactLength={leadLength}
          bodyDistance={leadLength + 0.6}
          height={0.6}
        />
      ))}
      {Array.from({ length: sidePinCount }).map((_, i) => (
        <SmdChipLead
          key={i}
          rotation={Math.PI}
          position={{
            x: bodyWidth / 2 + leadLength,
            y: i * pitch - pinOffsetToCenter,
            z: leadThickness / 2,
          }}
          width={leadWidth}
          thickness={leadThickness}
          padContactLength={leadLength}
          bodyDistance={leadLength + 0.6}
          height={0.6}
        />
      ))}
      <ChipBody
        center={{ x: 0, y: 0, z: leadThickness / 2 }}
        width={bodyWidth - leadWidth / 2}
        length={fullLength}
        height={1}
      />
    </>
  )
}

export default VSSOP
