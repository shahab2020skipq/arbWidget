import { LiFiWidget,WidgetConfig  } from '@lifi/widget';
import { WidgetEvents } from './WidgetEvents';
import { useMemo } from 'react'

export const Widget = () => {

  const widgetConfig: WidgetConfig = useMemo(() => ({
    chains: {
      allow: [42161],
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
    integrator:"nextjs-example"
  }), []);

  return (
    <>
      <WidgetEvents />
      <LiFiWidget
        config={widgetConfig
        }
        integrator="nextjs-example"
        
      />
    </>
  );
};
