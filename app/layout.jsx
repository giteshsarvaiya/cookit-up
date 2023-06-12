import "@styles/globals.css";

import Nav from '@components/Nav';
import Provider from '@components/Provider';


export const metadata = {
  title: "CookItUp",
  description: "Discover & Share Delicious Recipes",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
    
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          {children}
        </main>
    </body>
  </html>
);

export default RootLayout;