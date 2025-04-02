import { useForm } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Textarea } from '@/Components/ui/textarea';
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
} from '@/Components/ui/select';
import { Checkbox } from '../ui/checkbox';

export function PropertyCreateForm() {
    const { static_text, categories } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        title_tr: "", title_en: "", title_ru: "",
        address: "", price: "", category_id: "",
        square: "", rooms: "", salon: "", building_age: "",
        located_floor: "", floors_number: "", bathrooms: "",
        kitchen: "", balcony: false, furnished: false,
        usage_status: "", on_site: false, site_name: "", site_dues: "",
        credit_eligible: true, exchange_possibility: false,
        is_published: false,
        description_tr: "", description_en: "", description_ru: "",
    });

    function onSubmit(e) {
        e.preventDefault();
        post(route('properties.store'));
    }

    return (
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* Address */}
            <div className="col-span-1 md:col-span-2">
                <Label>{static_text.address}</Label>
                <Textarea placeholder={static_text.city_address_district} value={data.address} onChange={(e) => setData('address', e.target.value)} />
                {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
            </div>

            {/* Numeric Inputs */}
            {['price', 'square', 'rooms','salon', 'building_age', 'located_floor', 'floors_number', 'bathrooms'].map((field) => (
                <div key={field}>
                    <Label>{static_text[field]}</Label>
                    <Input type="number" min="0" value={data[field]} onChange={(e) => setData(field, e.target.value)} />
                    {errors[field] && <p className="text-sm text-red-500">{errors[field]}</p>}
                </div>
            ))}

            {/* Category */}
            <div>
                <Label>{static_text.select_category}</Label>
                <Select value={data.category_id} onValueChange={(value) => setData('category_id', value)}>
                    <SelectTrigger>
                        <SelectValue placeholder={static_text.select_category} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>{static_text.categories}</SelectLabel>
                            {categories.data.map(cat => (
                                <SelectItem key={cat.id} value={cat.id.toString()}>{cat.translations.value}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {errors.category_id && <p className="text-sm text-red-500">{errors.category_id}</p>}
            </div>

            {/* Kitchen Select */}
            <div>
                <Label>{static_text.kitchen}</Label>
                <Select value={data.kitchen} onValueChange={(value) => setData('kitchen', value)}>
                    <SelectTrigger>
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

            {/* Checkbox Group */}
            {['balcony', 'furnished', 'on_site', 'credit_eligible', 'exchange_possibility', 'is_published'].map(field => (
                <div key={field} className="flex items-center gap-2">
                    <Checkbox id={field} checked={data[field]} onCheckedChange={(checked) => setData(field, checked)} />
                    <Label htmlFor={field}>{static_text[field]}</Label>
                    {errors[field] && <p className="text-sm text-red-500">{errors[field]}</p>}
                </div>
            ))}

            {/* Site Name & Dues */}
            {['site_name', 'site_dues'].map(field => (
                <div key={field}>
                    <Label>{static_text[field]}</Label>
                    <Input type="text" value={data[field]} onChange={(e) => setData(field, e.target.value)} />
                    {errors[field] && <p className="text-sm text-red-500">{errors[field]}</p>}
                </div>
            ))}

            {/* Titles */}
            {['title_tr', 'title_en', 'title_ru'].map((field, index) => {
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
                    <div key={index} className="col-span-1 md:col-span-2 lg:col-span-3">
                        <Label>{labels[field]}</Label>
                        <Textarea placeholder={placeholders[field]} value={data[field]} onChange={(e) => setData(field, e.target.value)} />
                        {errors[field] && <p className="text-sm text-red-500">{errors[field]}</p>}
                    </div>
                )
            })}

            {/* Description Fields */}
            {['description_tr', 'description_en', 'description_ru'].map((field, index) => {
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
                    <div key={index} className="col-span-1 md:col-span-2 lg:col-span-3">
                        <Label>{labels[field]}</Label>
                        <Textarea placeholder={placeholders[field]} value={data[field]} onChange={(e) => setData(field, e.target.value)} />
                        {errors[field] && <p className="text-sm text-red-500">{errors[field]}</p>}
                    </div>
                )
            })}

            {/* Submit Button */}
            <div className="flex justify-end col-span-1 md:col-span-2 lg:col-span-3">
                <Button type="submit" disabled={processing}>{processing ? 'Submitting...' : 'Submit'}</Button>
            </div>
        </form>
    );
}
