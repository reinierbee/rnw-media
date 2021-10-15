<?php

/**
 * Combine these two lists and remove duplicates
 */

$list1 = ['David', 'Sarah', 'John', 'Luc', 'Angela'];

$list2 = ['John', 'Luc', 'Martijn', 'Hillary', 'Angela'];

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

/**
 * Use foreach to loop from 0 to 100 in steps of 5, showing each new number step on a new line.
 * 
 */
