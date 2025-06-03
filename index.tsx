import { sel } from "@tscircuit/core";
import { BMI270 } from "imports/BMI270";
import type { ChipProps } from "@tscircuit/props";

export default (props: Parameters<typeof BMI270>[0]) => (
	<group {...props}>
		<BMI270
			name="U1"
			connections={{
				VDD: sel.net.V3_3,
				VDDIO: sel.net.V3_3,
				GND: sel.net.GND,
				...props.connections,
			}}
		/>
		<resistor
			name="R6"
			footprint="0402"
			resistance="100k"
			pullupTo={sel.net.V3_3}
			pullupFor={sel.U1.N_CS}
			schX={2}
			schY={2}
			pcbX={3}
			schRotation="90deg"
			pcbRotation="-90deg"
		/>
		<capacitor
			name="C1"
			capacitance="0.1uF"
			footprint="0402"
			schX={-2.5}
			schRotation="-90deg"
			pcbY={2.5}
			connections={{
				pin1: sel.net.V3_3,
				pin2: sel.net.GND,
			}}
		/>
		<capacitor
			name="C2"
			capacitance="0.1uF"
			footprint="0402"
			schX={-3.5}
			pcbX={-2.8}
			pcbRotation="90deg"
			schRotation="-90deg"
			connections={{
				pin1: sel.net.V3_3,
				pin2: sel.net.GND,
			}}
		/>
	</group>
);
