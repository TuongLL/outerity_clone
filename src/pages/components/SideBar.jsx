import { TreeItem, TreeView } from "@mui/lab";
import { Box } from "@mui/material";
import React from "react";

const treeMenu = [
  {
    parent: "tops",
    child: ["tee", "polo", "croptop", "hoodie & sweater"],
  },
  {
    parent: "bottom",
    child: ["short"],
  },
  {
    parent: "accessories",
    child: ["tote bag"],
  },
];

function SideBar() {
  return (
    <Box>
      <TreeView sx={{
            textTransform: 'uppercase',
        }}>
        <TreeItem label="tops" nodeId="1" sx={{
            fontSize: '14px'
        }}>
          <TreeItem label="polo" nodeId="2" sx={{
            color: '#666',
            fontSize: '12px'
          }}/>
          <TreeItem label="croptop" nodeId="3"  sx={{
            color: '#666',
            fontSize: '12px'
          }} />
          <TreeItem  label="hoodie & sweater" nodeId="4"  sx={{
            color: '#666',
            fontSize: '12px!important'
          }}/>
        </TreeItem>
        <TreeItem label="bottom" nodeId="5" sx={{
            fontSize: '14px'
        }}>
          <TreeItem label="short" nodeId="6" sx={{
            color: '#666',
            fontSize: '12px'
          }}/>
        </TreeItem>
        <TreeItem label="accessories" nodeId="7" sx={{
            fontSize: '14px'
        }}>
          <TreeItem label="tote bag" nodeId="8" sx={{
            color: '#666',
            fontSize: '12px'
          }}/>
        </TreeItem>
        {/* <TreeItem nodeId="1" label="Applications">
          <TreeItem nodeId="2" label="Calendar" />
        </TreeItem>
        <TreeItem nodeId="5" label="Documents">
          <TreeItem nodeId="10" label="OSS" />
          <TreeItem nodeId="6" label="MUI">
            <TreeItem nodeId="8" label="index.js" />
          </TreeItem>
        </TreeItem> */}
      </TreeView>
    </Box>
  );
}

export default SideBar;
