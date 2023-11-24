import prisma from "@/lib/prisma";
import Form from "@/components/manage/form";
import { updateCourse } from "@/lib/manage/actions";

export default async function CourseSettingsAppearance({
  params,
}: {
  params: { slug: string };
}) {
  const data = await prisma.course.findUnique({
    where: {
      id: decodeURIComponent(params.slug),
    },
  });

  return (
    <div className="flex flex-col space-y-6">
      <Form
        title="Thumbnail image"
        description="The thumbnail image for your course. Accepted formats: .png, .jpg, .jpeg"
        helpText="Max file size 50MB. Recommended size 1200x630."
        inputAttrs={{
          name: "image",
          type: "file",
          defaultValue: data?.image!,
        }}
        handleSubmit={updateCourse}
      />
      <Form
        title="Logo"
        description="The logo for your course. Accepted formats: .png, .jpg, .jpeg"
        helpText="Max file size 50MB. Recommended size 400x400."
        inputAttrs={{
          name: "logo",
          type: "file",
          defaultValue: data?.image!,
        }}
        handleSubmit={updateCourse}
      />
      <Form
        title="Font"
        description="The font for the heading text your course."
        helpText="Please select a font."
        inputAttrs={{
          name: "font",
          type: "select",
          defaultValue: data?.font!,
        }}
        handleSubmit={updateCourse}
      />
      <Form
        title="404 Page Message"
        description="Message to be displayed on the 404 page."
        helpText="Please use 240 characters maximum."
        inputAttrs={{
          name: "message404",
          type: "text",
          defaultValue: data?.message404!,
          placeholder: "Blimey! You've found a page that doesn't exist.",
          maxLength: 240,
        }}
        handleSubmit={updateCourse}
      />
    </div>
  );
}
