import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BoardMemberCardProps {
  name: string;
  title: string;
  imageUrl: string;
  className?: string;
}

export function BoardMemberCard({
  name,
  title,
  imageUrl,
  className,
}: BoardMemberCardProps) {
  return (
    <Card className={cn("overflow-hidden card-hover", className)}>
      <div className="aspect-square relative">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
        />
      </div>
      <CardContent className="p-4 text-center">
        <h4 className="font-display font-semibold text-foreground">{name}</h4>
        <p className="text-sm text-muted-foreground">{title}</p>
      </CardContent>
    </Card>
  );
}
