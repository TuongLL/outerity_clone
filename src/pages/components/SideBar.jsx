import { TreeItem, TreeView } from "@mui/lab";
import { Box } from "@mui/material";
import Link from "next/link";
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
    <Box
      sx={{
        flex: "2",
      }}
    >
      <TreeView
        sx={{
          textTransform: "uppercase",
        }}
      >
        <TreeItem
          label="tops"
          nodeId="1"
          sx={{
            fontSize: "14px",
          }}
        >
          <TreeItem
            label={
              <Link
                style={{
                  width: "100%",
                  display: "block",
                  textDecoration: "none",
                  color: "#666",
                }}
                href="./tee"
              >
                tee
              </Link>
            }
            nodeId="2"
            sx={{
              color: "#666",
              fontSize: "12px",
            }}
          />
          <TreeItem
            label={
              <Link
                style={{
                  width: "100%",
                  display: "block",
                  textDecoration: "none",
                  color: "#666",
                }}
                href="./polo"
              >
                Polo
              </Link>
            }
            nodeId="3"
            sx={{
              color: "#666",
              fontSize: "12px",
            }}
          />
          <TreeItem
            label={
              <Link
                style={{
                  width: "100%",
                  display: "block",
                  textDecoration: "none",
                  color: "#666",
                }}
                href="./croptop"
              >
                croptop
              </Link>
            }
            nodeId="4"
            sx={{
              color: "#666",
              fontSize: "12px",
            }}
          />
          <TreeItem
            label={
              <Link
                style={{
                  width: "100%",
                  display: "block",
                  textDecoration: "none",
                  color: "#666",
                }}
                href="./phoodie-sweater"
              >
                hoodie & sweater
              </Link>
            }
            nodeId="5"
            sx={{
              color: "#666",
              fontSize: "12px!important",
            }}
          />
        </TreeItem>
        <TreeItem
          label="bottom"
          nodeId="6"
          sx={{
            fontSize: "14px",
          }}
        >
          <TreeItem
            label={
              <Link
                style={{
                  width: "100%",
                  display: "block",
                  textDecoration: "none",
                  color: "#666",
                }}
                href="./short"
              >
                short
              </Link>
            }
            nodeId="7"
            sx={{
              color: "#666",
              fontSize: "12px",
              textDecoration: "none",
              color: "#666",
            }}
          />
        </TreeItem>
        <TreeItem
          label="accessories"
          nodeId="8"
          sx={{
            fontSize: "14px",
          }}
        >
          <TreeItem
            label={
              <Link
                style={{
                  width: "100%",
                  display: "block",
                  textDecoration: "none",
                  color: "#666",
                }}
                href="./tote-bag"
              >
                tote bag
              </Link>
            }
            nodeId="9"
            sx={{
              color: "#666",
              fontSize: "12px",
            }}
          />
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
