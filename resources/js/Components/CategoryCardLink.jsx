import { Link } from "@inertiajs/react";
import Icons from "@/lib/icons";

export default function CategoryCardLink({ category }) {
    const IconComponent = Icons[category.icon] || Icons["fallback"];
    const ArrowIcon = Icons["right_arrow"] || Icons["fallback"];

    return (
        <Link
            href={route("category.show", { slug: category.key })}
            className="flex items-center justify-between gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
        >
            <div className="flex items-center gap-2">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                    <IconComponent size={30} />
                </div>
                <div className="pt-3 sm:pt-5">
                    <h5 className="text-xl font-semibold text-black dark:text-white">
                        {category.translations.value}
                    </h5>
                </div>
            </div>

            <ArrowIcon size={30} />
        </Link>
    );
}

