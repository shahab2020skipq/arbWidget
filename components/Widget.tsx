import { LiFiWidget } from '@lifi/widget';
import { WidgetEvents } from './WidgetEvents';

export const Widget = () => {
  return (
    <>
      <WidgetEvents />
      <LiFiWidget
        config={{
 // deny chains

chains: {
  deny: [56,100,250,10,43114,250,25,66,100,122,1284,1285,42220,1313161554,106,288,9001,1666600000,128,137,1],
},
          
          containerStyle: {

            
            border: `1px solid rgb(234, 234, 234)`,
            borderRadius: '16px',
          },
        }}
        integrator="nextjs-example"
      />
    </>
  );
};
