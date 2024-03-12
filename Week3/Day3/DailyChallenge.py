import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2.0
        else:
            raise ValueError("Either radius or diameter must be specified")

    @property
    def diameter(self):
        print(self.radius * 2)

    @diameter.setter
    def diameter(self, diameter):
        self.radius = diameter / 2.0

    @property
    def area(self):
        print(math.pi * (self.radius ** 2))

    def __repr__(self):
        return f"Circle with radius {self.radius}"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        else:
            return NotImplemented

    def __lt__(self, other):
        if isinstance(other, Circle):
           return self.radius < other.radius
        else:
            return NotImplemented

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        else:
            return NotImplemented
        
circle1 = Circle(5)
circle2 = Circle(10)

print(circle1)
print(circle2)

new_circle = circle1 + circle2
print("New circle: ", new_circle)

print("Is circle2 bigger than circle1?", circle2 > circle1)

circles = [circle1, circle2, new_circle]
circles.sort()
print("Sorted circles: ", circles)