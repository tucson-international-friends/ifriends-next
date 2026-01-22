import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const MEMBER_DATABASE_ID = "e27149a4729a468c822f1b799ce69e09";
export const NEWSLETTER_DATABASE_ID = "71147bd2ca1944e6ae7b433893bb0ba9";

export interface BoardMember {
  name: string;
  profileUrl: string;
  title: string;
  current: boolean;
}

export interface Newsletter {
  title: string;
  path: string;
}

export async function getBoardMembers(): Promise<BoardMember[]> {
  const response = await notion.databases.query({
    database_id: MEMBER_DATABASE_ID,
    sorts: [
      { property: "Title", direction: "ascending" },
      { property: "Name", direction: "ascending" },
    ],
  });

  return response.results.map((page: any) => {
    const member = page.properties;
    const name = member.Name.title[0]?.plain_text || "Unknown";
    return {
      name,
      profileUrl:
        member["Profile Picture"]?.files?.[0]?.file?.url ||
        `https://ui-avatars.com/api/?name=${encodeURIComponent(
          name,
        )}&size=200&background=d4bfaa&color=5f4638`,
      title: member.Title?.select?.name || "",
      current: member.Current?.checkbox || false,
    };
  });
}

export async function getNewsletters(): Promise<Newsletter[]> {
  const response = await notion.databases.query({
    database_id: NEWSLETTER_DATABASE_ID,
    sorts: [{ property: "Year", direction: "descending" }],
  });

  return response.results.map((page: any) => {
    const properties = page.properties;
    return {
      title: properties.Name?.title?.[0]?.plain_text || "Newsletter",
      path: properties.PDF?.files?.[0]?.file?.url || "",
    };
  });
}

export default notion;
