import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();
  const { name, email, message } = body;

  // Initialize Notion client
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  try {
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Notion API Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit to Notion' }, { status: 500 });
  }
}
