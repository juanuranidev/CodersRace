const pythonCodes: string[] = [
  `def add_numbers(a, b):\n    return a + b`,
  `def subtract_numbers(a, b):\n    return a - b`,
  `def multiply_numbers(a, b):\n    return a * b`,
  `def divide_numbers(a, b):\n    if b == 0:\n        return "Error: Division by zero"\n    return a / b`,
  `def calculate_average(numbers):\n    if len(numbers) == 0:\n        return 0\n    return sum(numbers) / len(numbers)`,
  `def is_even(number):\n    return number % 2 == 0`,
  `def is_prime(number):\n    if number <= 1:\n        return False\n    for i in range(2, int(number**0.5) + 1):\n        if number % i == 0:\n            return False\n    return True`,
  `def reverse_string(string):\n    return string[::-1]`,
  `def get_factorial(n):
      if n == 0:
          return 1
      else:
          return n * get_factorial(n - 1)`,
  `def count_vowels(string):
      vowels = "AEIOUaeiou"
      count = 0
      for char in string:
          if char in vowels:
              count += 1
      return count`,
  `def get_fibonacci(n):
      if n <= 0:
          return []
      elif n == 1:
          return [0]
      elif n == 2:
          return [0, 1]
      else:
          fibonacci_sequence = [0, 1]
          while len(fibonacci_sequence) < n:
              next_number = fibonacci_sequence[-1] + fibonacci_sequence[-2]
              fibonacci_sequence.append(next_number)
          return fibonacci_sequence`,
  `def capitalize_string(string):
      return string.capitalize()`,
  `def get_square_root(x):
      if x < 0:
          return "Error: Imaginary result"
      else:
          return x**0.5`,
  `def check_palindrome(string):
      return string == string[::-1]`,
  `def find_max(numbers):
      if len(numbers) == 0:
          return None
      else:
          return max(numbers)`,
];

export default pythonCodes;
