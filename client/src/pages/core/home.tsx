export default function Home() {
  throw new Error("Not implemented");
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted-foreground/10 aspect-video rounded-xl" />
        <div className="bg-muted-foreground/10 aspect-video rounded-xl" />
        <div className="bg-muted-foreground/10 aspect-video rounded-xl" />
      </div>
      <div className="bg-muted-foreground/10 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </div>
  );
}