<?php

namespace Database\Seeders;

use App\Models\StaticText;
use App\Models\StaticTextTranslation;
use Illuminate\Database\Seeder;

class StaticTextSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $texts = [
            'welcome' => 'Welcome',
            'home' => 'Home',
            'about' => 'About Us',
            'title' => 'Title',
            'address' => 'Address',
            'price' => 'Price',
            'square' => 'Square',
            'rooms' => 'Rooms',
            'building_age' => 'Building Age',
            'located_floor' => 'Located Floor',
            'floors_number' => 'Floors number',
            'bathrooms' => 'Bathrooms',
            'kitchen' => 'Kitchen',
            // 'kitchen_types' => [
            //     'closed' => 'Closed',
            //     'opened' => 'Opened',
            // ],
            'balcony' => 'Balcony',
            'furnished' => 'Furnished',
            'usage_status' => 'Usage Status',
            // 'usage_status_types' => [
            //     'empty' => 'Empty',
            //     'property_owner' => 'Property Owner',
            //     'tenant' => 'Tenant',
            // ],
            'on_site' => 'On Site',
            'site_name' => 'Site Name',
            'site_dues' => 'Site Dues',
            'credit_eligible' => 'Credit Eligible',
            'exchange_possibility' => 'Exchange Possibility',
            'description' => 'Description',
            'this_is_a_secure_area_of_the_application_please_confirm_your_password_before_continuing' => 'This is a secure area of the application. Please confirm your password before continuing.',
            'password' => 'Password',
            'confirm' => 'Confirm',
            'forgot_password' => 'Forgot Password',
            'forgot_your_password_no_problem' => 'Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.',
            'email_password_reset_link' => 'Email Password Reset Link',
            'remember_me' => 'Remember me',
            'forgot_your_password' => 'Forgot your password?',
            'log_in' => 'Log in',
            'email' => 'Email',
            'confirm_password' => 'Confirm Password',
            'search' => 'Search',
            'relocate' => 'Relocate',
            'register' => 'Register',
            'dashboard' => 'Dashboard',
            'city_address_district' => 'City, Address, District',
            'contact' => 'Contact',
            'meta_descr' => 'Your reliable real estate consultant in Didim! Professional service for buying and renting apartments, villas, and land. Find your dream property!',
        ];

        $ru_translations = [
            'welcome' => 'Добро пожаловать',
            'home' => 'Главная',
            'about' => 'О нас',
            'title' => 'Название',
            'address' => 'Адрес',
            'price' => 'Цена',
            'square' => 'Площадь',
            'rooms' => 'Комнаты',
            'building_age' => 'Возраст здания',
            'located_floor' => 'Этаж',
            'floors_number' => 'Количество этажей',
            'bathrooms' => 'Ванные комнаты',
            'kitchen' => 'Кухня',
            // 'kitchen_types' => [
            //     'closed' => 'Отдельная',
            //     'opened' => 'Совмещенная',
            // ],
            'balcony' => 'Балкон',
            'furnished' => 'Меблированная',
            'usage_status' => 'Статус использования',
            // 'usage_status_types' => [
            //     'empty' => 'Свободная',
            //     'property_owner' => 'Проживает собственник',
            //     'tenant' => 'Проживает арендатор',
            // ],
            'on_site' => 'В жилом комплексе',
            'site_name' => 'Название комплекса',
            'site_dues' => 'Платежи в жил. комплекс',
            'credit_eligible' => 'Возможен кредит',
            'exchange_possibility' => 'Возможен обмен',
            'description' => 'Описание',
            'this_is_a_secure_area_of_the_application_please_confirm_your_password_before_continuing' => 'Это защищенная область приложения. Пожалуйста, подтвердите свой пароль перед продолжением.',
            'password' => 'Пароль',
            'confirm' => 'Подтвердить',
            'forgot_password' => 'Забыли пароль',
            'forgot_your_password_no_problem' => 'Забыли свой пароль? Не проблема. Просто укажите свой адрес электронной почты, и мы отправим вам ссылку для сброса пароля, чтобы вы могли выбрать новый.',
            'email_password_reset_link' => 'Отправить ссылку для сброса пароля',
            'remember_me' => 'Запомнить меня',
            'forgot_your_password' => 'Забыли пароль?',
            'log_in' => 'Войти',
            'email' => 'Электронная почта',
            'confirm_password' => 'Подтвердите пароль',
            'search' => 'Поиск',
            'relocate' => 'Переезд',
            'register' => 'Регистрация',
            'dashboard' => 'Панель управления',
            'city_address_district' => 'Город, Адрес, Район',
            'contact' => 'Контакты',
            'meta_descr' => 'Ваш надежный консультант по недвижимости в Дидиме! Профессиональные услуги по покупке и аренде квартир, вилл и земельных участков. Найдите недвижимость своей мечты!',
        ];

        $tr_translations = [
            'welcome' => 'Hoşgeldiniz',
            'home' => 'Ana Sayfa',
            'about' => 'Hakkımızda',
            'title' => 'Başlık',
            'address' => 'Adres',
            'price' => 'Fiyat',
            'square' => 'Metrekare',
            'rooms' => 'Odalar',
            'building_age' => 'Bina Yaşı',
            'located_floor' => 'Bulunduğu Kat',
            'floors_number' => 'Kat Sayısı',
            'bathrooms' => 'Banyolar',
            'kitchen' => 'Mutfak',
            // 'kitchen_types' => [
            //     'closed' => 'Kapalı',
            //     'opened' => 'Açık',
            // ],
            'balcony' => 'Balkon',
            'furnished' => 'Eşyalı',
            'usage_status' => 'Kullanım Durumu',
            // 'usage_status_types' => [
            //     'empty' => 'Boş',
            //     'property_owner' => 'Ev Sahibi',
            //     'tenant' => 'Kiracı',
            // ],
            'on_site' => 'Site İçinde',
            'site_name' => 'Site Adı',
            'site_dues' => 'Aidat',
            'credit_eligible' => 'Krediye Uygun',
            'exchange_possibility' => 'Takas İmkanı',
            'description' => 'Açıklama',
            'this_is_a_secure_area_of_the_application_please_confirm_your_password_before_continuing' => 'Bu, uygulamanın güvenli bir alanıdır. Devam etmeden önce lütfen şifrenizi onaylayın.',
            'password' => 'Şifre',
            'confirm' => 'Onayla',
            'forgot_password' => 'Şifremi Unuttum',
            'forgot_your_password_no_problem' => 'Şifrenizi mi unuttunuz? Sorun değil. Bize e-posta adresinizi bildirin, size yeni bir şifre seçmenize olanak tanıyacak bir şifre sıfırlama bağlantısı göndereceğiz.',
            'email_password_reset_link' => 'Şifre Sıfırlama Bağlantısını Gönder',
            'remember_me' => 'Beni hatırla',
            'forgot_your_password' => 'Şifrenizi mi unuttunuz?',
            'log_in' => 'Giriş yap',
            'email' => 'e-posta',
            'confirm_password' => 'Şifreyi Onayla',
            'search' => 'Ara',
            'relocate' => 'Taşınma',
            'register' => 'Hesap aç',
            'dashboard' => 'Kontrol Paneli',
            'city_address_district' => 'Şehir, Adres, İlçe',
            'contact' => 'İletişim',
            'meta_descr' => "Didim'de güvenilir emlak danışmanınız! Satılık ve kiralık daireler, villalar ve arsalar için profesyonel hizmet. Hayalinizdeki mülke ulaşın!",
        ];

        foreach ($texts as $key => $text) {
            $staticText = StaticText::create([
                'key' => $key,
            ]);

            StaticTextTranslation::create([
                'static_text_id' => $staticText->id,
                'locale' => 'en',
                'value' => $text,
            ]);

            StaticTextTranslation::create([
                'static_text_id' => $staticText->id,
                'locale' => 'tr',
                'value' => $tr_translations[$key],
            ]);

            StaticTextTranslation::create([
                'static_text_id' => $staticText->id,
                'locale' => 'ru',
                'value' => $ru_translations[$key],
            ]);


        }
    }
}
