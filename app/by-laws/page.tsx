import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bylaws",
  description:
    "View the official bylaws of International Friends, Inc., a 501(c)(3) nonprofit organization.",
};

export default function ByLawsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-wide">
        <h1 className="text-4xl font-display font-bold mb-8">Bylaws</h1>
        <iframe
          title="Bylaws"
          className="w-full rounded-xl border shadow-sm"
          style={{ height: "75vh" }}
          src="https://drive.google.com/file/d/18eOqpZ9YtkMvrIv1_9KsK8hHcesaHY0x/preview"
        />
      </div>
    </div>
  );
}
