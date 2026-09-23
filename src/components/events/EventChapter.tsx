import { CinematicChapter } from "./CinematicChapter";
import { EditorialGridChapter } from "./EditorialGridChapter";
import { FeatureGalleryChapter } from "./FeatureGalleryChapter";
import { GraduationChapter } from "./GraduationChapter";
import { OverlapChapter } from "./OverlapChapter";
import type { ChapterProps } from "./eventsShared";

export function EventChapter(props: ChapterProps) {
  if (props.category.layout === "editorial-grid") {
    return <EditorialGridChapter {...props} />;
  }

  if (props.category.layout === "overlap") {
    return <OverlapChapter {...props} />;
  }

  if (props.category.layout === "feature-gallery") {
    return <FeatureGalleryChapter {...props} />;
  }

  if (props.category.layout === "graduation-arch") {
    return <GraduationChapter {...props} />;
  }

  return <CinematicChapter {...props} />;
}
