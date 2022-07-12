// Your code goes here!
import { modulo, percentage, percentageOf, difference } from "./percentage.js";
import { calculateAspectRatio } from "./aspect-ratio.js";

const modulo1 = document.querySelector("#modulo_1");
const modulo2 = document.querySelector("#modulo_2");
const moduloResult = document.querySelector("#modulo_result");

modulo2.addEventListener("input", () => {
  moduloResult.value = modulo(modulo1.value, modulo2.value);
});

const percentage1 = document.querySelector("#percentage_1");
const percentage2 = document.querySelector("#percentage_2");
const percentageResult = document.querySelector("#percentage_result");

percentage2.addEventListener("input", () => {
  percentageResult.value = percentage(percentage1.value, percentage2.value);
});

const percentageOf1 = document.querySelector("#percentageOf_1");
const percentageOf2 = document.querySelector("#percentageOf_2");
const percentageOfResult = document.querySelector("#percentageOf_result");

percentageOf2.addEventListener("input", () => {
  percentageOfResult.value = percentageOf(
    percentageOf1.value,
    percentageOf2.value
  );
});

const difference1 = document.querySelector("#difference_1");
const difference2 = document.querySelector("#difference_2");
const differenceResult = document.querySelector("#difference_result");

difference2.addEventListener("input", () => {
  differenceResult.value = difference(difference1.value, difference2.value);
});

const aspect1 = document.querySelector("#ratio_1");
const aspect2 = document.querySelector("#ratio_2");
const aspectW = document.querySelector("#ratio_result-width");
const aspectH = document.querySelector("#ratio_result-height");

aspectH.addEventListener("input", () => {
  aspectW.value = calculateAspectRatio(
    aspect1.value,
    aspect2.value,
    aspectH.value,
    "h"
  );
});

aspectW.addEventListener("input", () => {
  aspectH.value = calculateAspectRatio(
    aspect1.value,
    aspect2.value,
    aspectW.value,
    "w"
  );
});
