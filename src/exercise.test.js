import { runCode } from "./exercise";

async function solution(url) {
  const response = await fetch(url);
  return response.json();
}

describe("tests", () => {
  it("should return valid a URL", async () => {
    expect(() => runCode('---')).rejects.toThrowError(new Error("Invalid URL"));
    expect(() => runCode('http://')).rejects.toThrowError(new Error("Invalid URL"));
    expect(() => runCode('hola')).rejects.toThrowError(new Error("Invalid URL"));
    expect(() => runCode('')).rejects.toThrowError(new Error("Invalid URL"));
  });

  it("should throw a error with valid URL but inexistent URL", () => {
    expect(() => runCode('https://domain-a.com/api-1')).rejects.toThrowError(new Error("Something was wrong"));
    expect(() => runCode('https://domain-a.co/api-2')).rejects.toThrowError(new Error("Something was wrong"));
  });

  it("should return the data in json format", async () => {
    const usersOriginal = await solution('https://jsonplaceholder.typicode.com/users');
    const users = await runCode('https://jsonplaceholder.typicode.com/users');
    expect(users).toEqual(usersOriginal);
    const postsOriginal = await solution('https://jsonplaceholder.typicode.com/posts');
    const posts = await runCode('https://jsonplaceholder.typicode.com/posts');
    expect(posts).toEqual(postsOriginal);
  });
});
