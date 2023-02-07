import React, { PropsWithChildren } from 'react';
import { Container} from "react-bootstrap";
import Navbar from "@components/menu/nav.js";
import Foot from "@components/footer/foot.js";

const layout = ({ children })  => {
  return (
    <div>
        <Navbar />
            <Container>
                {children}
            </Container>
        <Foot />
    </div>
  )
}

export default layout;