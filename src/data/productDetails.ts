export const productDetails: Record<string, Array<{
  title: string;
  specifications: string[];
  price: string;
  image: string;
}>> = {
  np2: [
    {
      title: "NP2 225mm",
      specifications: [
        "Diameter: 225mm (9 inches)",
        "Length: 8 meters",
        "Thickness: 50mm",
        "Available in spygaurd (straight)"
      ],
      price: "₹1,000",
      image: "data:image/jpeg;base64,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"
    },
    {
      title: "NP2 250mm",
      specifications: [
        "Diameter: 250mm (10 inches)",
        "Length: 8 meters",
        "Thickness: 50mm",
        "Available in spygaurd (straight)"
      ],
      price: "₹1,200",
      image: "https://media.istockphoto.com/id/618225484/photo/stack-of-concrete-drainage-pipes-for-wells-and-water-discharges.webp?a=1&b=1&s=612x612&w=0&k=20&c=GPhlFWbnKw1Ati8b1v33FwzBtNyNsNr7sY2JMw4NxLE="
    },
    {
      title: "NP2 300mm",
      specifications: [
        "Diameter: 300mm (1 feet)",
        "Length: 8 meters",
        "Thickness: 50mm",
        "Available in spygaurd (straight)"
      ],
      price: "₹1,500",
      image: "https://images.unsplash.com/photo-1635001056605-c673c1f78d88?auto=format&fit=crop&q=80"
    },
    {
      title: "NP2 450mm",
      specifications: [
        "Diameter: 450mm (1 feet)",
        "Length: 8 meters",
        "Thickness: 50mm",
        "Available in spygaurd (straight)"
      ],
      price: "₹1,500",
      image: "https://images.unsplash.com/photo-1635001056605-c673c1f78d88?auto=format&fit=crop&q=80"
    },
    {
      title: "NP2 600mm",
      specifications: [
        "Diameter: 600mm (1 and half feet)",
        "Length: 8 meters",
        "Thickness: 50mm",
        "Available in spygaurd (straight)"
      ],
      price: "₹1,500",
      image: "https://images.unsplash.com/photo-1635001056605-c673c1f78d88?auto=format&fit=crop&q=80"
    },{
      title: "NP2 800mm",
      specifications: [
        "Diameter: 800mm (2 feet)",
        "Length: 8 meters",
        "Thickness: 50mm",
        "Available in spygaurd (straight)"
      ],
      price: "₹1,500",
      image: "https://images.unsplash.com/photo-1635001056605-c673c1f78d88?auto=format&fit=crop&q=80"
    },
    {
      title: "NP2 900mm",
      specifications: [
        "Diameter: 900mm (2 and half feet)",
        "Length: 8 meters",
        "Thickness: 50mm",
        "Available in spygaurd (straight)"
      ],
      price: "₹1,500",
      image: "https://images.unsplash.com/photo-1635001056605-c673c1f78d88?auto=format&fit=crop&q=80"
    },
    {
      title: "NP2 1200mm",
      specifications: [
        "Diameter: 1200mm (3 feet)",
        "Length: 8 meters",
        "Thickness: 50mm",
        "Available in spygaurd (straight)"
      ],
      price: "₹1,500",
      image: "https://images.unsplash.com/photo-1635001056605-c673c1f78d88?auto=format&fit=crop&q=80"
    },
    // Add more NP2 sizes...
  ],
  np3: [
    {
      title: "NP3 300mm",
      specifications: [
        "Diameter: 300mm (1 feet)",
        "Length: 8 meters",
        "Thickness: 100mm",
        "Load testing available" ],
      price: "₹3,500",
      image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80"
    },
    {
      title: "NP3 450mm",
      specifications: [
        "Diameter: 450mm (1.5 feet)",
        "Length: 8 meters",
        "Thickness: 100mm",
        "Load testing available"
      ],
      price: "₹4,500",
      image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80"
    },
    {
      title: "NP3 600mm",
      specifications: [
        "Diameter: 600mm (2 feet)",
        "Length: 8 meters",
        "Thickness: 100mm",
        "Load testing available"
      ],
      price: "₹6,500",
      image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80"
    },
    // Here Add more NP3 sizes...
  ],
  np4: [
    {
      title: "NP4 300mm",
      specifications: [
        "Diameter: 300mm (1 feet)",
        "Length: 8 meters",
        "Thickness: 115mm",
        "Load testing available"
      ],
      price: "₹3,687",
      image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80"
    },
    {
      title: "NP4 450mm",
      specifications: [
        "Diameter: 450mm (1.5 feet)",
        "Length: 8 meters",
        "Thickness: 115mm",
        "Load testing available"
      ],
      price: "₹5,200",
      image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80"
    },
    {
      title: "NP4 600mm",
      specifications: [
        "Diameter: 600mm (2 feet)",
        "Length: 8 meters",
        "Thickness: 115mm",
        "Load testing available"
      ],
      price: "₹7,800",
      image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80"
    },
    // Here Add more NP4 sizes...
  ],
  pressure: [
    {
      title: "P1 Pressure Pipe 300mm",
      specifications: [
        "Diameter: 300mm",
        "Length: 8 meters",
        "Water testing available",
        "Load testing available"
      ],
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
    },
    {
      title: "P2 Pressure Pipe 450mm",
      specifications: [
        "Diameter: 450mm",
        "Length: 8 meters",
        "Water testing available",
        "Load testing available"
      ],
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
    },
    {
      title: "P3 Pressure Pipe 600mm",
      specifications: [
        "Diameter: 600mm",
        "Length: 8 meters",
        "Water testing available",
        "Load testing available"
      ],
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
    }
  ]
};