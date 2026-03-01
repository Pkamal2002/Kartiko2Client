/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import api from "@/config/api";
import toast from "react-hot-toast";

export default function CreateProductPage() {
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    discountPrice: "",
    stock: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      price: "",
      discountPrice: "",
      stock: "",
      category: "",
      image: null,
    });
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.price || !formData.stock || !formData.category) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("price", Number(formData.price));
      data.append("discountPrice", Number(formData.discountPrice) || 0);
      data.append("stock", Number(formData.stock));
      data.append("category", formData.category);

      if (formData.image) {
        data.append("images", formData.image);
      }

      // Debug FormData properly
      // for (let pair of data.entries()) {
      //   // console.log(pair[0], pair[1]);
      // }

      const response = await api.post("/products", data);

      // console.log("Response:", response.data);

      toast.success("Product created successfully 🚀");
      resetForm();
    } catch (error) {
      // console.error("Frontend Error:", error.response?.data || error.message);
      toast.error(
        error?.response?.data?.message || "Failed to create product"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-5xl"
      >
        <Card className="shadow-2xl rounded-2xl border-0">
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tight">
              Create Product (Admin)
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Title */}
              <div className="space-y-2">
                <Label>Product Title *</Label>
                <Input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label>Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, category: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6996cfa780def5b7e00fb7ef">
                      Mobile Parts
                    </SelectItem>
                    <SelectItem value="6996cfe999deb7c9995e664c">
                      Electronics
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Description */}
              <div className="space-y-2 md:col-span-2">
                <Label>Description</Label>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              {/* Price */}
              <div className="space-y-2">
                <Label>Price *</Label>
                <Input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>

              {/* Discount Price */}
              <div className="space-y-2">
                <Label>Discount Price</Label>
                <Input
                  type="number"
                  name="discountPrice"
                  value={formData.discountPrice}
                  onChange={handleChange}
                />
              </div>

              {/* Stock */}
              <div className="space-y-2">
                <Label>Stock *</Label>
                <Input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                />
              </div>

              {/* Image Upload */}
              <div className="space-y-2 md:col-span-2">
                <Label>Product Image</Label>
                <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-2xl cursor-pointer hover:bg-slate-50 transition-all">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="h-full object-contain rounded-2xl"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                      <ImageIcon className="w-8 h-8" />
                      <span className="text-sm">Click to upload image</span>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Submit */}
              <div className="md:col-span-2">
                <Button
                  type="submit"
                  className="w-full text-lg py-6 rounded-xl"
                  disabled={loading}
                >
                  {loading ? "Creating Product..." : "Create Product"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}