<?php

namespace App\Livewire;

use Livewire\Component;

class PageTest extends Component
{
    public function navigateToPage()
    {
        return redirect()->route('another.page');
    }

    public function render()
    {
        return view('livewire.page-test'); // Update view name as needed
    }
}
