import styled from "@emotion/styled"

export const PaginationContainer = styled.nav`
  color: black;
`

export const IndexesContainer = styled.div`
  min-height: 40px;
  padding: 0px 10px;
  margin-left: 10px;
  background-color: #ccc;
  border-radius: 20px;
  span {
    color: black;
    margin: 0 8px;
    cursor: pointer;
    user-select: none;
  }
`

type PaginationItemProps = { active: boolean; clickable: boolean }

export const PaginationItem = styled.span<PaginationItemProps>`
  width: 32px;
  height: 32px;
  margin: 0 !important;
  border-radius: 100%;
  background-color: white;
  box-shadow: 0px 0px 4px #00000014;
`
