import { useForm } from '@inertiajs/react'
import { Button } from "@/Components/ui/button"
import { Textarea } from "@/Components/ui/textarea"
import { usePage } from '@inertiajs/react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Checkbox } from '../ui/checkbox';

export function PropertyCreateForm() {
    const { static_text, categories } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        title_tr: "",
        title_en: "",
        title_ru: "",

        address: "",
        price: "",
        category_id: "",
        square: "",
        rooms: "",
        building_age: "",
        located_floor: "",
        floors_number: "",
        bathrooms: "",
        kitchen: "",
        balcony: false,
        furnished: false,
        usage_status: "",
        on_site: false,
        site_name: "",
        site_dues: "",
        credit_eligible: true,
        exchange_possibility: false,
        is_published: false,

        description_tr: "",
        description_en: "",
        description_ru: "",
    });

    function onSubmit(e) {
        e.preventDefault();
        post(route('properties.store'));
    }

    return (
        <form onSubmit={onSubmit} className="space-y-8">
            {/* Titles */}
            <div>
                {["title_tr", "title_en", "title_ru"].map((field, index) => {
                    const labels = {
                        title_tr: "Başlık TR",
                        title_en: "Title EN",
                        title_ru: "Заголовок RU",
                    };
                    const placeholders = {
                        title_tr: "Başlığınızı yazın",
                        title_en: "Enter your title",
                        title_ru: "Введите заголовок",
                    };

                    return (
                        <div key={index} className="w-full">
                            <Label className="block font-medium">{labels[field]}</Label>
                            <Textarea
                                placeholder={placeholders[field]}
                                value={data[field]}
                                onChange={(e) => setData(field, e.target.value)}
                                className="w-full mt-1"
                            />
                            {errors[field] && <p className="text-sm text-red-500">{errors[field]}</p>}
                        </div>
                    );
                })}
            </div>

            <div>
                <Label className="block font-medium">{static_text.address}</Label>
                <Textarea
                    placeholder={static_text.city_address_district}
                    value={data["address"]}
                    onChange={(e) => setData("address", e.target.value)}
                    className="w-full mt-1"
                />
                {errors["address"] && <p className="text-sm text-red-500">{errors["address"]}</p>}
            </div>

            <div>
                <Label className="block font-medium">{static_text.price}</Label>
                <Input
                    type="number"
                    step="0.01"
                    min="0"
                    value={data["price"]}
                    onChange={(e) => setData("price", e.target.value)}
                    className="w-full p-2 mt-1 border rounded-md"
                />
                {errors["price"] && <p className="text-sm text-red-500">{errors["price"]}</p>}
            </div>

            <div>
                <Select value={data.category_id} onValueChange={(value) => setData("category_id", value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={static_text.select_category} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>{static_text.categories}</SelectLabel>
                            {
                                categories.data.map(cat =>
                                    <SelectItem key={cat.id} value={cat.id.toString()}>
                                        {cat.translations.value}
                                    </SelectItem>)
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {errors.category_id && <p className="text-sm text-red-500">{errors.category_id}</p>}
            </div>

            <div>
                <Label className="block font-medium">{static_text.square}</Label>
                <Input
                    type="number"
                    min="0"
                    value={data.square}
                    onChange={(e) => setData("square", e.target.value)}
                    className="w-full p-2 mt-1 border rounded-md"
                />
                {errors.square && <p className="text-sm text-red-500">{errors.square}</p>}
            </div>

            <div>
                <Label className="block font-medium">{static_text.rooms}</Label>
                <Input
                    type="text"
                    value={data.rooms}
                    onChange={(e) => setData("rooms", e.target.value)}
                    className="w-full p-2 mt-1 border rounded-md"
                />
                {errors.rooms && <p className="text-sm text-red-500">{errors.rooms}</p>}
            </div>

            <div>
                <Label className="block font-medium">{static_text.building_age}</Label>
                <Input
                    type="text"
                    value={data.building_age}
                    onChange={(e) => setData("building_age", e.target.value)}
                    className="w-full p-2 mt-1 border rounded-md"
                />
                {errors.building_age && <p className="text-sm text-red-500">{errors.building_age}</p>}
            </div>

            <div>
                <Label className="block font-medium">{static_text.located_floor} not required</Label>
                <Input
                    type="number"
                    min="0"
                    value={data.located_floor}
                    onChange={(e) => setData("located_floor", e.target.value)}
                    className="w-full p-2 mt-1 border rounded-md"
                />
                {errors.located_floor && <p className="text-sm text-red-500">{errors.located_floor}</p>}
            </div>

            <div>
                <Label className="block font-medium">{static_text.floors_number}</Label>
                <Input
                    type="number"
                    min="0"
                    value={data.floors_number}
                    onChange={(e) => setData("floors_number", e.target.value)}
                    className="w-full p-2 mt-1 border rounded-md"
                />
                {errors.floors_number && <p className="text-sm text-red-500">{errors.floors_number}</p>}
            </div>

            <div>
                <Label className="block font-medium">{static_text.bathrooms}</Label>
                <Input
                    type="number"
                    value={data.bathrooms}
                    onChange={(e) => setData("bathrooms", e.target.value)}
                    className="w-full p-2 mt-1 border rounded-md"
                />
                {errors.bathrooms && <p className="text-sm text-red-500">{errors.bathrooms}</p>}
            </div>

            <div>
                <Select value={data.kitchen} onValueChange={(value) => setData("kitchen", value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={static_text.kitchen} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value='closed'>{static_text.closed}</SelectItem>
                            <SelectItem value='opened'>{static_text.opened}</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {errors.kitchen && <p className="text-sm text-red-500">{errors.kitchen}</p>}
            </div>

            <div className="flex items-center gap-2">
                <Checkbox
                    id="balcony"
                    checked={data.balcony}
                    onCheckedChange={(checked) => setData("balcony", checked)}
                    className="w-5 h-5"
                />
                <Label htmlFor="balcony">{static_text.balcony}</Label>
                {errors.balcony && <p className="text-sm text-red-500">{errors.balcony}</p>}
            </div>

            <div className="flex items-center gap-2">
                <Checkbox
                    id="furnished"
                    checked={data.furnished}
                    onCheckedChange={(checked) => setData("furnished", checked)}
                    className="w-5 h-5"
                />
                <Label htmlFor="furnished">{static_text.furnished}</Label>
                {errors.furnished && <p className="text-sm text-red-500">{errors.furnished}</p>}
            </div>

            <div>
                <Select value={data.usage_status} onValueChange={(value) => setData("usage_status", value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={static_text.usage_status} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value='empty'>{static_text.empty}</SelectItem>
                            <SelectItem value='property_owner'>{static_text.property_owner}</SelectItem>
                            <SelectItem value='tenant'>{static_text.tenant}</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {errors.usage_status && <p className="text-sm text-red-500">{errors.usage_status}</p>}
            </div>

            <div className="flex items-center gap-2">
                <Checkbox
                    id="on_site"
                    checked={data.on_site}
                    onCheckedChange={(checked) => setData("on_site", checked)}
                    className="w-5 h-5"
                />
                <Label htmlFor="on_site">{static_text.on_site}</Label>
                {errors.on_site && <p className="text-sm text-red-500">{errors.on_site}</p>}
            </div>

            <div>
                <Label className="block font-medium">{static_text.site_name}</Label>
                <Input
                    type="text"
                    value={data.site_name}
                    onChange={(e) => setData("site_name", e.target.value)}
                    className="w-full p-2 mt-1 border rounded-md"
                />
                {errors.site_name && <p className="text-sm text-red-500">{errors.site_name}</p>}
            </div>

            <div>
                <Label className="block font-medium">{static_text.site_dues}</Label>
                <Input
                    type="text"
                    value={data.site_dues}
                    onChange={(e) => setData("site_dues", e.target.value)}
                    className="w-full p-2 mt-1 border rounded-md"
                />
                {errors.site_dues && <p className="text-sm text-red-500">{errors.site_dues}</p>}
            </div>

            <div className="flex items-center gap-2">
                <Checkbox
                    id="credit_eligible"
                    checked={data.credit_eligible}
                    onCheckedChange={(checked) => setData("credit_eligible", checked)}
                    className="w-5 h-5"
                />
                <Label htmlFor="credit_eligible">{static_text.credit_eligible}</Label>
                {errors.credit_eligible && <p className="text-sm text-red-500">{errors.credit_eligible}</p>}
            </div>

            <div className="flex items-center gap-2">
                <Checkbox
                    id="exchange_possibility"
                    checked={data.exchange_possibility}
                    onCheckedChange={(checked) => setData("exchange_possibility", checked)}
                    className="w-5 h-5"
                />
                <Label htmlFor="exchange_possibility">{static_text.exchange_possibility}</Label>
                {errors.exchange_possibility && <p className="text-sm text-red-500">{errors.exchange_possibility}</p>}
            </div>

            <div className="flex items-center gap-2">
                <Checkbox
                    id="is_published"
                    checked={data.is_published}
                    onCheckedChange={(checked) => setData("is_published", checked)}
                    className="w-5 h-5"
                />
                <Label htmlFor="is_published">{static_text.is_published}</Label>
                {errors.is_published && <p className="text-sm text-red-500">{errors.is_published}</p>}
            </div>

            <hr />

            {/* Descriptions TODO: implement redactor maybe with tabs or collapsible */}
            <div>
                {["description_tr", "description_en", "description_ru"].map((field, index) => {
                    const labels = {
                        description_tr: "Açıklama TR",
                        description_en: "Description EN",
                        description_ru: "Описание RU",
                    };
                    const placeholders = {
                        description_tr: "Açıklama yazın",
                        description_en: "Enter your description",
                        description_ru: "Введите oписание",
                    };

                    return (
                        <div key={index} className="w-full">
                            <Label className="block font-medium">{labels[field]}</Label>
                            <Textarea
                                placeholder={placeholders[field]}
                                value={data[field]}
                                onChange={(e) => setData(field, e.target.value)}
                                className="w-full"
                            />
                            {errors[field] && <p className="text-sm text-red-500">{errors[field]}</p>}
                        </div>
                    );
                })}
            </div>

            <Button type="submit" disabled={processing}>
                {processing ? "Submitting..." : "Submit"}
            </Button>
        </form>
    );
}
