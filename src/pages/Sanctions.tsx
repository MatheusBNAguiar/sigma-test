import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react"
import { SanctionsApi } from "../core/Sanctions/Sanctions.api"
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../components/Table';
import { Title } from '../components/Text'
import { EnterIcon } from '../components/Icons/EnterIcon'
import { Input } from '../components/Input'
import type { SanctionList } from "../core/Sanctions/Sanctions.types"

export function Sanctions() {
  const [sanctionList, setSanctionList] = useState<SanctionList>([])

  useEffect(() => {
    SanctionsApi.getSanctionsList().then(setSanctionList)
  }, [])

  return (
    <div>
      <Title>Sanctions</Title>
      <div>
        <Input placeholder="Search by its alias" />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Sanctioned Status</TableCell>
            <TableCell>Matching Alias</TableCell>
            <TableCell />
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            sanctionList.map(sanction => (
              <TableRow key={sanction.id}>
                <TableCell >{sanction.primaryName}</TableCell>
                <TableCell>{sanction.ended ? 'Ended' : 'Issued'}</TableCell>
                <TableCell>Dado 3</TableCell>
                <TableCell>
                  <Link to={`/sanctions/${sanction.id}`}>
                    <EnterIcon />
                  </Link>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}
