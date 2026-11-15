import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import blogData from "../data/blog";

test("renders the correct child components", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".App")).toBeInTheDocument();
  expect(container.querySelector(".App header")).toBeInTheDocument();
  expect(container.querySelector(".App aside")).toBeInTheDocument();
  expect(container.querySelector(".App main")).toBeInTheDocument();
});

test("passes blog data to its child components", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { level: 1, name: blogData.name })
  ).toBeInTheDocument();
  expect(screen.getByText(blogData.about)).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "blog logo" })).toHaveAttribute(
    "src",
    blogData.image
  );

  blogData.posts.forEach((post) => {
    expect(
      screen.getByRole("heading", { level: 3, name: post.title })
    ).toBeInTheDocument();
  });
});
