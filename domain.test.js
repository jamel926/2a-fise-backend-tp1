import {about_message} from './domain.js';

test("message d'accueil", () => {
  expect(about_message()).toBe("Le backend, c'est la vie!");
});