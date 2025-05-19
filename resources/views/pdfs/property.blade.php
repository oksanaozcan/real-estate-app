<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{ $property['translation']['title'] ?? 'Untitled' }}</title>
    <style>
        body { font-family: sans-serif; font-size: 14px; line-height: 1.4; }
        .container { width: 100%; padding: 20px; }
        .header { display: flex; margin-bottom: 20px; }
        .header img { width: 250px; height: auto; border-radius: 6px; margin-right: 20px; }
        h1 { color: #0891b2; margin-bottom: 10px; }
        .info p { margin: 4px 0; }
        .section { margin-top: 20px; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            {{-- TODO: implement display image after running on public server --}}
            {{-- @if(isset($property['images'][0]['url']))
                <img src="{{ url($property['images'][0]['url']) }}" alt="Main image">
            @endif --}}
            <div>
                <h2>Erdal Özcan tel: 90 553 872 03 19</h2>
            </div>
            <div class="info">
                <h1>{{ $property['translation']['title'] }}</h1>
                <p><strong>No:</strong> {{ $property['id'] }}</p>
                <p><strong>Address:</strong> {{ $property['address'] }}</p>
                <p><strong>Price:</strong> {{ number_format($property['price']) }} ₺</p>
                <p><strong>Rooms:</strong> {{ $property['rooms'] }} + {{ $property['salon'] }}</p>
                <p><strong>Bathrooms:</strong> {{ $property['bathrooms'] }}</p>
                <p><strong>Square:</strong> {{ $property['square'] }} m²</p>
                <p><strong>Kitchen:</strong> {{ ucfirst($property['kitchen']) }}</p>
                <p><strong>Building Age:</strong> {{ $property['building_age'] }}</p>
            </div>
        </div>

        <div class="section">
            <h2>Description</h2>
            <p>{{ $property['translation']['description'] }}</p>
        </div>

        <div class="section">
            <h2>Property Features</h2>
            <table>
                <tr>
                    <th>Feature</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>Balcony</td>
                    <td>{{ $property['balcony'] ? 'Yes' : 'No' }}</td>
                </tr>
                <tr>
                    <td>Furnished</td>
                    <td>{{ $property['furnished'] ? 'Yes' : 'No' }}</td>
                </tr>
                <tr>
                    <td>Credit Eligible</td>
                    <td>{{ $property['credit_eligible'] ? 'Yes' : 'No' }}</td>
                </tr>
                <tr>
                    <td>Exchange Possibility</td>
                    <td>{{ $property['exchange_possibility'] ? 'Yes' : 'No' }}</td>
                </tr>
                <tr>
                    <td>Usage Status</td>
                    <td>{{ ucfirst(str_replace('_', ' ', $property['usage_status'])) }}</td>
                </tr>
                <tr>
                    <td>On Site</td>
                    <td>{{ $property['on_site'] ? 'Yes' : 'No' }}</td>
                </tr>
                <tr>
                    <td>Site Name</td>
                    <td>{{ $property['site_name'] ?? '—' }}</td>
                </tr>
                <tr>
                    <td>Site Dues</td>
                    <td>{{ $property['site_dues'] ? $property['site_dues'] . ' ₺' : '—' }}</td>
                </tr>
            </table>
        </div>
    </div>
</body>
</html>

