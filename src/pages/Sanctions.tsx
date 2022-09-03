import React, { useEffect, useState } from "react"
import { SanctionsApi } from "../core/Sanctions/Sanctions.api"
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../components/Table';
import type { SanctionList } from "../core/Sanctions/Sanctions.types"

export function Sanctions() {
  const [sanctionList, setSanctionList] = useState<SanctionList>([])
  useEffect(() => {
    SanctionsApi.getSanctionsList().then(setSanctionList)
  }, [])
  return (
    <pre>
      SAnction list {JSON.stringify(sanctionList, null, 2)}
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Coluna 1</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Dado 1</TableCell>
            <TableCell>Dado 2</TableCell>
            <TableCell>Dado 3</TableCell>
            <TableCell>Dado 4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dado 5</TableCell>
            <TableCell>Dado 6</TableCell>
            <TableCell>Dado 7</TableCell>
            <TableCell>Dado 8</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </pre>
  )
}
