import type { BlogContent } from "@/lib/notion-blog";
import { RichText } from "./RichText";

interface NotionTableProps {
  block: BlogContent;
}

export function NotionTable({ block }: NotionTableProps) {
  if (!block.tableRows || block.tableRows.length === 0) return null;

  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-border/20 bg-base [border-width:revert]!">
      <table className="w-full border-collapse">
        {block.hasColumnHeader && block.tableRows.length > 0 && (
          <thead className="bg-surface-elevated">
            <tr className="border-b border-border/15 [border-width:revert]! [border-top-width:0]! [border-left-width:0]! [border-right-width:0]!">
              {block.tableRows[0].cells.map((cell, cellIdx) => (
                <th
                  key={cellIdx}
                  className="px-6 py-4 text-left text-sm font-semibold text-(--color-prose-headings)"
                >
                  <RichText segments={cell.richText} />
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {block.tableRows
            .slice(block.hasColumnHeader ? 1 : 0)
            .map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className="border-b border-border/10 last:border-b-0 [border-width:revert]! [border-top-width:0]! [border-left-width:0]! [border-right-width:0]!"
              >
                {row.cells.map((cell, cellIdx) => {
                  const isRowHeader = block.hasRowHeader && cellIdx === 0;
                  const CellTag = isRowHeader ? "th" : "td";
                  return (
                    <CellTag
                      key={cellIdx}
                      className={`px-6 py-4 text-sm ${
                        isRowHeader
                          ? "font-medium text-(--color-prose-headings) text-left"
                          : "text-text-secondary"
                      }`}
                    >
                      <RichText segments={cell.richText} />
                    </CellTag>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
