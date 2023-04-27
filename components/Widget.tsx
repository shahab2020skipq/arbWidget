import { LiFiWidget,WidgetConfig  } from '@lifi/widget';
import { WidgetEvents } from './WidgetEvents';
import { useMemo } from 'react'

export const Widget = () => {
  const widgetConfig: WidgetConfig = useMemo(() => ({
    chains: {
      deny: [56,100,250,10,43114,250,25,66,100,122,1284,1285,42220,1313161554,106,288,9001,1666600000,128,137,1],
    },
    containerStyle: {
      border: `1px solid ${
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'rgb(66, 66, 66)'
          : 'rgb(234, 234, 234)'
      }`,
      borderRadius: '16px',
    },
    theme: {
      palette: {
        primary: { main: '#9900d1' },
        secondary: { main: '#F5B5FF' },
      },
      shape: {
        borderRadius: 0,
        borderRadiusSecondary: 0,
      },
      typography: {
        fontFamily: 'Comic Sans MS',
      },
    },
    appearance: 'dark',
    disableAppearance: true,
  }), []);

  return (
    <>
      <WidgetEvents />
      <LiFiWidget
        config={widgetConfig}
        integrator="nextjs-example"
      />
    </>
  );
};
