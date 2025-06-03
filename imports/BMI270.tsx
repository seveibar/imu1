import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["POCI", "ADR"],
	pin2: ["ASDX"],
	pin3: ["ASCX"],
	pin4: ["INT1"],
	pin5: ["VDDIO"],
	pin6: ["GNDIO"],
	pin7: ["GND"],
	pin8: ["VDD"],
	pin9: ["INT2"],
	pin10: ["N_OCS"],
	pin11: ["OSDO"],
	pin12: ["N_CS"],
	pin13: ["SCL", "SCK"],
	pin14: ["PICO", "SDA"],
} as const;

export const BMI270 = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C2836813"],
			}}
			schPinStyle={{
				INT1: { marginTop: 0.4 },
				GND: { marginTop: 0.4 },
				OSDO: { marginTop: 0.2 },
				ASCX: { marginTop: 0.2 },
			}}
			schPinArrangement={{
				leftSide: {
					direction: "top-to-bottom",
					pins: ["VDD", "VDDIO", "INT1", "INT2", "GND"],
				},
				rightSide: {
					direction: "top-to-bottom",
					pins: ["SCL", "SDA", "ADR", "N_CS", "ASCX", "ASDX", "OSDO", "N_OCS"],
				},
			}}
			manufacturerPartNumber="BMI270"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin1"]}
						pcbX="1.1699747999999772mm"
						pcbY="-0.7499349999999367mm"
						width="0.5999987999999999mm"
						height="0.27000199999999996mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2"]}
						pcbX="1.1699747999999772mm"
						pcbY="-0.2498089999999138mm"
						width="0.5999987999999999mm"
						height="0.27000199999999996mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin3"]}
						pcbX="1.1699747999999772mm"
						pcbY="0.2500630000000683mm"
						width="0.5999987999999999mm"
						height="0.27000199999999996mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin4"]}
						pcbX="1.1699747999999772mm"
						pcbY="0.7501889999999776mm"
						width="0.5999987999999999mm"
						height="0.27000199999999996mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin5"]}
						pcbX="0.4997704000002159mm"
						pcbY="0.9200134000000162mm"
						width="0.27000199999999996mm"
						height="0.5999987999999999mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin6"]}
						pcbX="-0.0001015999999935957mm"
						pcbY="0.9200134000000162mm"
						width="0.27000199999999996mm"
						height="0.5999987999999999mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin7"]}
						pcbX="-0.5002275999999028mm"
						pcbY="0.9200134000000162mm"
						width="0.27000199999999996mm"
						height="0.5999987999999999mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin8"]}
						pcbX="-1.1699747999999772mm"
						pcbY="0.7501889999999776mm"
						width="0.5999987999999999mm"
						height="0.27000199999999996mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin9"]}
						pcbX="-1.1699747999999772mm"
						pcbY="0.2500630000000683mm"
						width="0.5999987999999999mm"
						height="0.27000199999999996mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin10"]}
						pcbX="-1.1699747999999772mm"
						pcbY="-0.2498089999999138mm"
						width="0.5999987999999999mm"
						height="0.27000199999999996mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin11"]}
						pcbX="-1.1699747999999772mm"
						pcbY="-0.7499349999999367mm"
						width="0.5999987999999999mm"
						height="0.27000199999999996mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin12"]}
						pcbX="-0.5002275999999028mm"
						pcbY="-0.9200134000000162mm"
						width="0.27000199999999996mm"
						height="0.5999987999999999mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin13"]}
						pcbX="-0.0001015999999935957mm"
						pcbY="-0.9200134000000162mm"
						width="0.27000199999999996mm"
						height="0.5999987999999999mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin14"]}
						pcbX="0.4997704000002159mm"
						pcbY="-0.9200134000000162mm"
						width="0.27000199999999996mm"
						height="0.5999987999999999mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: -0.8305546000000277, y: -1.3260832000000846 },
							{ x: -1.5762477999999192, y: -1.3260832000000846 },
							{ x: -1.5762477999999192, y: -1.0803889999999683 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -0.8305546000000277, y: 1.3262864000000718 },
							{ x: -1.5762477999999192, y: 1.3262864000000718 },
							{ x: -1.5762477999999192, y: 1.0805921999999555 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 0.830503799999974, y: -1.3260832000000846 },
							{ x: 1.5761970000000929, y: -1.3260832000000846 },
							{ x: 1.5761970000000929, y: -1.0803889999999683 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 0.830503799999974, y: 1.3262864000000718 },
							{ x: 1.5761970000000929, y: 1.3262864000000718 },
							{ x: 1.5761970000000929, y: 1.0805921999999555 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/download?uuid=1e27b85210a0453eb361fa5def23f788&pn=C2836813",
				rotationOffset: { x: 0, y: 0, z: 180 },
				positionOffset: { x: 0, y: 0, z: 0 },
			}}
			{...props}
		/>
	);
};
