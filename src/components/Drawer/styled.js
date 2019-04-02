import styled from "styled-components";
import { size } from "../../theme/constants";

export const StyledAside = styled.aside`
  font-size: 1rem;
  display: flex;
  flex-direction: column;

  width: ${p => (p.isOpen ? size.drawer.openWidth : size.drawer.closeWidth)};
  background: ${p => p.theme.palette.background.paper};
  border-right: 1px solid ${p => p.theme.palette.divider};
  overflow: hidden;

  z-index: 10;
`;

export const StyledServiceNav = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledAppNav = styled(StyledServiceNav)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
