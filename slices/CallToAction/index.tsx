import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { ButtonLink } from "@/components/ButtonLink";
import { Bounded } from "@/components/Bounded";

export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

const CallToAction: FC<CallToActionProps> = ({ slice }) => {
  const alignment = slice.variation === "alignLeft" ? "left" : "center";
console.log("slices", slice.primary.projects)
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="es-bounded es-call-to-action overflow-hidden bg-black py-16 text-white md:py-24"
    >
      <div className="es-bounded__content es-call-to-action__content">
        {isFilled.image(slice.primary.image) && (
          <PrismicNextImage
            className="es-call-to-action__image"
            alt=""
            field={slice.primary.image}
          />
        )}
        <div className="es-call-to-action__content">
          {isFilled.richText(slice.primary.title) && (
            <div className="es-call-to-action__content__heading">
              <PrismicRichText field={slice.primary.title} />
            </div>
          )}
          {isFilled.richText(slice.primary.paragraph) && (
            <div className="es-call-to-action__content__paragraph">
              <PrismicRichText field={slice.primary.paragraph} />
            </div>
          )}
        </div>

        {slice.primary.buttonLink1.map((link) => (
          <ButtonLink
            key={link.key}
            field={link}
          />
        ))}
        {slice.primary.buttonLink2.map((link) => (
          <ButtonLink
            key={link.key}
            field={link}
          />
        ))}



        {/* const fragrance = await client.getByID<ProjectsDocument>(id);
        {slice.primary.projects.map((item) => {
          // Type guard to check if 'project' exists on item and is an object with 'id'
            if (isFilled.contentRelationship(item.projects)) {

            return (
              <div
                key={item.projects.id}
                id={item.projects.id}
              >
              </div>
            );
          }
          return null;
        })} */}
      </div>

      <style>
        {`
          .es-bounded {
            padding: 8vw 2rem;
          }

          .es-bounded__content {
            margin-left: auto;
            margin-right: auto;
          }

          @media screen and (min-width: 640px) {
            .es-bounded__content {
              max-width: 90%;
            }
          }

          @media screen and (min-width: 896px) {
            .es-bounded__content {
              max-width: 80%;
            }
          }

          @media screen and (min-width: 1280px) {
            .es-bounded__content {
              max-width: 75%;
            }
          }

          .es-call-to-action {
            font-family: system-ui, sans-serif;
            background-color: #fff;
            color: #333;
          }

          .es-call-to-action__image {
            max-width: 14rem;
            height: auto;
            width: auto;
            justify-self: ${alignment};
          }

          .es-call-to-action__content {
            display: grid;
            gap: 1rem;
            justify-items: ${alignment};
          }

          .es-call-to-action__content__heading {
            font-size: 2rem;
            font-weight: 700;
            text-align: ${alignment};
          }

          .es-call-to-action__content__heading * {
            margin: 0;
          }

          .es-call-to-action__content__paragraph {
            font-size: 1.15rem;
            max-width: 38rem;
            text-align: ${alignment};
          }

          .es-call-to-action__button {
            justify-self: ${alignment};
            border-radius: 0.25rem;
            display: inline-block;
            font-size: 0.875rem;
            line-height: 1.3;
            padding: 1rem 2.625rem;
            text-align: ${alignment};
            transition: background-color 100ms linear;
            background-color: #16745f;
            color: #fff;
          }

          .es-call-to-action__button:hover {
            background-color: #0d5e4c;
          }
        `}
      </style>
    </Bounded>
  );
};

export default CallToAction;
