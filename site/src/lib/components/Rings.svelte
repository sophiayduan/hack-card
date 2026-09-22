<script lang="ts">
    import { T } from '@threlte/core'
    import { BufferGeometry, EllipseCurve, type Line as ThreeLine } from 'three'

    const radius = 2.8
    const curve = new EllipseCurve(0, 0, radius, radius, 0, Math.PI * 2, false, 0)
    const points = curve.getPoints(128) // more points = smoother circle
    const geometry = new BufferGeometry().setFromPoints(points)
</script>

<T.LineLoop
    {geometry}
    scale={0.8}

    rotation={[1.7, 2.7, 0]}
    oncreate={(ref: ThreeLine) => ref.computeLineDistances()}
>
    <T.LineDashedMaterial
        color="gray"
        dashSize={0.1}
        gapSize={0.05}
    />
</T.LineLoop>

<T.LineLoop
    {geometry}
    rotation={[1.76, 6.5, 0]}
    scale={1}
    oncreate={(ref: ThreeLine) => ref.computeLineDistances()}
>
    <T.LineDashedMaterial
        color="gray"
        dashSize={0.1}
        gapSize={0.05}
    />
</T.LineLoop>
