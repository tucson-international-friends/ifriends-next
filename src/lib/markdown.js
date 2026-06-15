import { marked } from "marked";

// Replaces react-markdown from the Next.js site. Content strings live inline in
// the page data (bullet lists, links, emphasis). GitHub-flavored markdown by
// default matches what react-markdown produced.
// gfm:false to match react-markdown's default — bare emails/URLs render as
// plain text (not auto-linked); explicit [text](url) links still work.
marked.setOptions({
  gfm: false,
  breaks: false,
});

export const renderMarkdown = (md) => marked.parse((md ?? "").trim());
