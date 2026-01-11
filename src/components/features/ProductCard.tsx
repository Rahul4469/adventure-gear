'use client';

import { useState } from "react";

interface ProductSpecs {
    battery?: string;
    waterproof?: string;
    temperature?: string;
}

interface Product {
    id: number;
    name: string;
    tagline: string;
    price: number;
    category: string;
    specs: ProductSpecs;
    imageUrl: string;
}