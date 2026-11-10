namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class E2ETestUserSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'e2e@example.com'],
            [
                'name' => 'E2E Tester',
                'password' => Hash::make('Password123!'),
            ]
        );
    }
}