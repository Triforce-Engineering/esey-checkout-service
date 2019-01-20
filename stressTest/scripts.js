import http from "k6/http";
import { group, sleep } from "k6";

export const options = {
  duration: '3000s',
  rps: 1000,
  vus: 100,
};

function getRandomUserId(maxUserId = 10000) {
  return Math.floor(Math.random() * maxUserId);
}
const vuUserId = getRandomUserId();

function getRandomItemId(maxItemId = 10000000) {
  return Math.floor(Math.random() * maxItemId);
}
const vuItemId = getRandomItemId();
const vuItemId2 = getRandomItemId();
const vuItemId3 = getRandomItemId();
const vuItemId4 = getRandomItemId();
const vuItemId5 = getRandomItemId();
const vuItemId6 = getRandomItemId();
const vuItemId7 = getRandomItemId();
const vuItemId8 = getRandomItemId();
const vuItemId9 = getRandomItemId();
const vuItemId10 = getRandomItemId();
const vuItemId11 = getRandomItemId();

const vuSleepTime = Math.floor((Math.random())) + 0.001;

const host = 'http://localhost:3002';

export default function () {
  // 15x read queries (75%)
  group('Read queries', () => {
    // read item 11x times to simulate more item views 
    group('load item information', () => {
      http.get(host + '/items/' + vuItemId);
      sleep(vuSleepTime);
      http.get(host + '/items/' + vuItemId2);
      sleep(vuSleepTime);
      http.get(host + '/items/' + vuItemId3);
      sleep(vuSleepTime);
      http.get(host + '/items/' + vuItemId4);
      sleep(vuSleepTime);
      http.get(host + '/items/' + vuItemId5);
      sleep(vuSleepTime);
      http.get(host + '/items/' + vuItemId6);
      sleep(vuSleepTime);
      http.get(host + '/items/' + vuItemId7);
      sleep(vuSleepTime);
      http.get(host + '/items/' + vuItemId8);
      sleep(vuSleepTime);
      http.get(host + '/items/' + vuItemId9);
      sleep(vuSleepTime);
      http.get(host + '/items/' + vuItemId10);
      sleep(vuSleepTime);
      http.get(host + '/items/' + vuItemId11);
      sleep(vuSleepTime);
    });
    // 4x time read cart
    group('load user cart', () => {
      http.get(host + '/users/' + vuUserId + '/cart');
      sleep(vuSleepTime);
      http.get(host + '/users/' + vuUserId + '/cart');
      sleep(vuSleepTime);
      http.get(host + '/users/' + vuUserId + '/cart');
      sleep(vuSleepTime);
      http.get(host + '/users/' + vuUserId + '/cart');
      sleep(vuSleepTime);
    });
  });
  // 5x write queries (25%)
  group('Write queries', () => {
    // 2x times add new Item
    group('add a new item to cart', () => {
      http.post(host + '/users/' + vuUserId + '/cart',
        JSON.stringify({
          itemId: vuItemId,
          quantity: 5,
        }),
        { headers: { 'Content-Type': 'application/json' } });
      sleep(vuSleepTime);
      http.post(host + '/users/' + vuUserId + '/cart',
        JSON.stringify({
          itemId: vuItemId2,
          quantity: 6,
        }),
        { headers: { 'Content-Type': 'application/json' } });
    });

    // 1x times increment item quantity
    group('increment item-coumt in cart', () => {
      http.patch(host + '/users/' + vuUserId + '/cart/' + vuItemId,
        JSON.stringify({
          quantity: 2,
        }),
        { headers: { 'Content-Type': 'application/json' } });
    });

    // 1x remove item
    group('remove item from cart', () => {
      http.del(host + '/users/' + vuUserId + '/cart/' + vuItemId2);
    });

    // 1x purchase items
    group('purchase all items from cart', () => {
      http.post(host + '/users/' + vuUserId + '/purchases');
    });
  });
}
