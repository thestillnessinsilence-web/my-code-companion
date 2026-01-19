import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Save, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function AdminProductEdit() {
  const queryClient = useQueryClient();
  const [editingProducts, setEditingProducts] = useState({});

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => base44.entities.Product.list(),
    initialData: [],
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Product.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
      toast.success('Product updated successfully');
    },
  });

  const handleEdit = (product) => {
    setEditingProducts({
      ...editingProducts,
      [product.id]: {
        name: product.name,
        description: product.description,
        price: product.price,
        image_url: product.image_url || '',
        features: product.features || []
      }
    });
  };

  const handleSave = async (productId) => {
    const data = editingProducts[productId];
    await updateMutation.mutateAsync({ id: productId, data });
    const { [productId]: _, ...rest } = editingProducts;
    setEditingProducts(rest);
  };

  const handleCancel = (productId) => {
    const { [productId]: _, ...rest } = editingProducts;
    setEditingProducts(rest);
  };

  const updateField = (productId, field, value) => {
    setEditingProducts({
      ...editingProducts,
      [productId]: {
        ...editingProducts[productId],
        [field]: value
      }
    });
  };

  const addFeature = (productId) => {
    const current = editingProducts[productId];
    updateField(productId, 'features', [...current.features, '']);
  };

  const updateFeature = (productId, index, value) => {
    const current = editingProducts[productId];
    const newFeatures = [...current.features];
    newFeatures[index] = value;
    updateField(productId, 'features', newFeatures);
  };

  const removeFeature = (productId, index) => {
    const current = editingProducts[productId];
    const newFeatures = current.features.filter((_, i) => i !== index);
    updateField(productId, 'features', newFeatures);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-stone-50 pt-32 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#10665c] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <Link
          to={createPageUrl('Shop')}
          className="inline-flex items-center gap-2 font-sans text-sm text-stone-600 hover:text-[#10665c] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <h1 className="font-serif text-4xl text-stone-800 mb-8">Edit Products</h1>

        <div className="space-y-6">
          {products
            .filter(product => !['Pressed Flower Card', 'Herbal Tea'].includes(product.name))
            .map((product) => {
              const isEditing = editingProducts[product.id];
              const editData = isEditing || product;

              return (
                <Card key={product.id} className="border-stone-200">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="font-serif text-2xl text-stone-800">
                      {product.name}
                    </CardTitle>
                    {!isEditing && (
                      <Button
                        onClick={() => handleEdit(product)}
                        variant="outline"
                        className="border-stone-300"
                      >
                        Edit
                      </Button>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {isEditing ? (
                      <>
                        <div>
                          <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2 block">
                            Product Name
                          </Label>
                          <Input
                            value={editData.name}
                            onChange={(e) => updateField(product.id, 'name', e.target.value)}
                            className="border-stone-200"
                          />
                        </div>

                        <div>
                          <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2 block">
                            Description
                          </Label>
                          <Textarea
                            value={editData.description}
                            onChange={(e) => updateField(product.id, 'description', e.target.value)}
                            className="border-stone-200 min-h-24"
                          />
                        </div>

                        <div>
                          <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2 block">
                            Price ($)
                          </Label>
                          <Input
                            type="number"
                            step="0.01"
                            value={editData.price}
                            onChange={(e) => updateField(product.id, 'price', parseFloat(e.target.value))}
                            className="border-stone-200"
                          />
                        </div>

                        <div>
                          <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-2 block">
                            Image URL
                          </Label>
                          <Input
                            value={editData.image_url}
                            onChange={(e) => updateField(product.id, 'image_url', e.target.value)}
                            className="border-stone-200"
                          />
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Label className="font-sans text-xs tracking-widest uppercase text-stone-500">
                              Features
                            </Label>
                            <Button
                              type="button"
                              size="sm"
                              variant="outline"
                              onClick={() => addFeature(product.id)}
                              className="h-7"
                            >
                              <Plus className="w-3 h-3 mr-1" />
                              Add Feature
                            </Button>
                          </div>
                          <div className="space-y-2">
                            {editData.features?.map((feature, index) => (
                              <div key={index} className="flex gap-2">
                                <Input
                                  value={feature}
                                  onChange={(e) => updateFeature(product.id, index, e.target.value)}
                                  className="border-stone-200"
                                  placeholder="Feature description"
                                />
                                <Button
                                  type="button"
                                  size="icon"
                                  variant="ghost"
                                  onClick={() => removeFeature(product.id, index)}
                                  className="text-red-500 hover:text-red-600"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3 pt-4">
                          <Button
                            onClick={() => handleSave(product.id)}
                            disabled={updateMutation.isPending}
                            className="bg-[#10665c] hover:bg-[#0d534a] text-white"
                          >
                            {updateMutation.isPending ? (
                              <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Saving...
                              </>
                            ) : (
                              <>
                                <Save className="w-4 h-4 mr-2" />
                                Save Changes
                              </>
                            )}
                          </Button>
                          <Button
                            onClick={() => handleCancel(product.id)}
                            variant="outline"
                            className="border-stone-300"
                          >
                            Cancel
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-1 block">
                            Description
                          </Label>
                          <p className="text-stone-700">{product.description}</p>
                        </div>

                        <div>
                          <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-1 block">
                            Price
                          </Label>
                          <p className="text-stone-700">${product.price}</p>
                        </div>

                        {product.features && product.features.length > 0 && (
                          <div>
                            <Label className="font-sans text-xs tracking-widest uppercase text-stone-500 mb-1 block">
                              Features
                            </Label>
                            <ul className="list-disc list-inside text-stone-700 space-y-1">
                              {product.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </>
                    )}
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
}