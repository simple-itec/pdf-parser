const express = require('express');
const redis = require('redis');

function test() {
    console.log(`Test!`)
}
setInterval(test, 1000)