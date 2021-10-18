<?php

/**
 * Combine these two lists and remove duplicates
 */

$list1 = ['David', 'Sarah', 'John', 'Luc', 'Angela'];

$list2 = ['John', 'Luc', 'Martijn', 'Hillary', 'Angela'];

$list_combined = array_unique(array_merge($list1, $list2));

print_r($list_combined);

/**
 * Get the first names and present as a comma separated list
 */

$people = [
    [
        'first_name' => 'Quentin',
        'last_name'  => 'Tarrantino'
    ], 
    [
        'first_name' => 'Patty',
        'last_name'  => 'Jenkins'
    ],
    [ 
        'first_name' => 'Kathryn',
        'last_name'  => 'Bigelow'
    ],
    [
        'first_name' => 'Luc',
        'last_name'  => 'Besson'
    ]
];

$first_names = [];

foreach($people as $person) {
    array_push($first_names, $person['first_name']);
}

echo implode(", ",$first_names);

/**
 * Use this class to make the word 'Hello' (one letter at a time) and echo the output to the screen
 */

class TextInput {

    public $currentValue = '';
    
    public function add($text) {
        $this->currentValue .= $text;
    }

    public function getValue() {
        return $this->currentValue;
    }

}

$text_input = new TextInput();

$letters = str_split("Hello");

foreach($letters as $letter) {
    $text_input->add($letter);
}
print($text_input->getValue());


/**
 * Use foreach to loop from 0 to 100 in steps of 5, showing each new number step on a new line.
 * 
 */

 foreach(range(0, 100, 5) as $number) {
     print($number . PHP_EOL);
 }
