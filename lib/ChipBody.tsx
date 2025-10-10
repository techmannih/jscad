import {
  Colorize,
  Cuboid,
  Hull,
  RoundedCuboid,
  Translate,
  Union,
} from "jscad-fiber"

export interface ChipBodyProps {
  width: number
  length: number
  height: number
  heightAboveSurface?: number
  center: { x: number; y: number; z: number }
}

export const ChipBody = ({
  center,
  width,
  length,
  height,
  heightAboveSurface = 0.15,
}: ChipBodyProps) => {
  const straightHeight = height * 0.75
  const taperHeight = height - straightHeight
  const taperInset = Math.min(width, length) * 0.12
  const topWidth = Math.max(width - taperInset, width * 0.75)
  const topLength = Math.max(length - taperInset, length * 0.75)

  return (
    <Colorize color="#555">
      <Translate offset={center}>
        <Translate offset={{ x: 0, y: 0, z: heightAboveSurface }}>
          <Union>
            <Translate z={straightHeight / 2}>
              <RoundedCuboid
                roundRadius={0.2}
                size={[width, length, straightHeight]}
              />
            </Translate>

            <Hull>
              <Translate z={straightHeight}>
                <Cuboid size={[width, length, 0.01]} />
              </Translate>

              <Translate z={straightHeight + taperHeight}>
                <Cuboid size={[topWidth, topLength, 0.01]} />
              </Translate>
            </Hull>
          </Union>
        </Translate>
      </Translate>
    </Colorize>
  )
}
